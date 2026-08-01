import { Test, TestingModule } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

interface SkillResponse {
  id: string;
  name: string;
  category: string;
  highlighted?: boolean;
}

interface CompanyResponse {
  id: string;
  name: string;
}

interface ExperienceResponse {
  id: string;
  companyId: string;
  company?: { name: string };
  skills?: { name: string }[];
}

interface ProjectResponse {
  id: string;
  name: string;
}

interface StatResponse {
  id: string;
  label: string;
  value: number;
  showPlus: boolean;
  icon: string;
  stat?: unknown;
  kind?: unknown;
}

interface StatusResponse {
  status: string;
}

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // Skills endpoints
  describe('/skills', () => {
    it('GET /skills - should return 200 and an array of skills', () => {
      return request(app.getHttpServer())
        .get('/skills')
        .expect(200)
        .expect((res) => {
          const body = res.body as SkillResponse[];
          expect(Array.isArray(body)).toBe(true);
          expect(body.length).toBeGreaterThan(0);
          expect(body[0]).toHaveProperty('id');
          expect(body[0]).toHaveProperty('name');
          expect(body[0]).toHaveProperty('category');
        });
    });

    it('GET /skills?category=frontend - should return filtered skills', () => {
      return request(app.getHttpServer())
        .get('/skills?category=frontend')
        .expect(200)
        .expect((res) => {
          const body = res.body as SkillResponse[];
          expect(Array.isArray(body)).toBe(true);
          body.forEach((skill) => {
            expect(skill.category).toBe('frontend');
          });
        });
    });

    it('GET /skills?onlyHighlighted=true - should return only highlighted skills', () => {
      return request(app.getHttpServer())
        .get('/skills?onlyHighlighted=true')
        .expect(200)
        .expect((res) => {
          const body = res.body as SkillResponse[];
          expect(Array.isArray(body)).toBe(true);
          body.forEach((skill) => {
            expect(skill.highlighted).toBe(true);
          });
        });
    });

    it('GET /skills/categories - should return status 200 and available categories', () => {
      return request(app.getHttpServer())
        .get('/skills/categories')
        .expect(200)
        .expect((res) => {
          const body = res.body as string[];
          expect(Array.isArray(body)).toBe(true);
          expect(body.length).toBeGreaterThan(0);
          expect(body).toContain('frontend');
        });
    });
  });

  // Companies endpoints
  describe('/companies', () => {
    it('GET /companies - should return 200 and an array of companies', () => {
      return request(app.getHttpServer())
        .get('/companies')
        .expect(200)
        .expect((res) => {
          const body = res.body as CompanyResponse[];
          expect(Array.isArray(body)).toBe(true);
          expect(body.length).toBeGreaterThan(0);
          expect(body[0]).toHaveProperty('id');
          expect(body[0]).toHaveProperty('name');
        });
    });

    it('GET /companies/:id - should return a single company', () => {
      return request(app.getHttpServer())
        .get('/companies/1')
        .expect(200)
        .expect((res) => {
          const body = res.body as CompanyResponse;
          expect(body).toHaveProperty('id');
          expect(body).toHaveProperty('name');
          expect(body.id).toBe('1');
        });
    });
  });

  // Experience endpoints
  describe('/experience', () => {
    it('GET /experience - should return 200 and an array of experiences', () => {
      return request(app.getHttpServer())
        .get('/experience')
        .expect(200)
        .expect((res) => {
          const body = res.body as ExperienceResponse[];
          expect(Array.isArray(body)).toBe(true);
          expect(body.length).toBeGreaterThan(0);
          expect(body[0]).toHaveProperty('id');
          expect(body[0]).toHaveProperty('companyId');
        });
    });

    it('GET /experience/:id - should return a single experience', () => {
      return request(app.getHttpServer())
        .get('/experience/1')
        .expect(200)
        .expect((res) => {
          const body = res.body as ExperienceResponse;
          expect(body).toHaveProperty('id');
          expect(body).toHaveProperty('companyId');
          expect(body.id).toBe('1');
        });
    });

    it('GET /experience - should return experiences with resolved companies and skills', () => {
      return request(app.getHttpServer())
        .get('/experience')
        .expect(200)
        .expect((res) => {
          const body = res.body as ExperienceResponse[];
          const experience = body[0];
          expect(experience.company).toBeDefined();
          expect(typeof experience.company).toBe('object');
          expect(experience.company).toHaveProperty('name');

          expect(Array.isArray(experience.skills)).toBe(true);
          if (experience.skills && experience.skills.length > 0) {
            expect(experience.skills[0]).toHaveProperty('name');
          }
        });
    });
  });

  // Projects endpoints
  describe('/projects', () => {
    it('GET /projects - should return 200 and an array of projects', () => {
      return request(app.getHttpServer())
        .get('/projects')
        .expect(200)
        .expect((res) => {
          const body = res.body as ProjectResponse[];
          expect(Array.isArray(body)).toBe(true);
          expect(body.length).toBeGreaterThan(0);
          expect(body[0]).toHaveProperty('id');
          expect(body[0]).toHaveProperty('name');
        });
    });

    it('GET /projects/:id - should return a single project', () => {
      return request(app.getHttpServer())
        .get('/projects/1')
        .expect(200)
        .expect((res) => {
          const body = res.body as ProjectResponse;
          expect(body).toHaveProperty('id');
          expect(body).toHaveProperty('name');
          expect(body.id).toBe('1');
        });
    });

    it('GET /projects/:id - should return 404 for non-existent project', () => {
      return request(app.getHttpServer()).get('/projects/999999').expect(404);
    });
  });

  describe('/stats (e2e)', () => {
    it('GET /stats - should return 200 and 4 calculated stats', () => {
      return request(app.getHttpServer())
        .get('/stats')
        .expect(200)
        .expect((res) => {
          const body = res.body as StatResponse[];
          expect(Array.isArray(body)).toBe(true);
          expect(body.length).toBe(4);

          const stat = body[0];
          expect(stat).toHaveProperty('id');
          expect(stat).toHaveProperty('label');
          expect(stat).toHaveProperty('value');
          expect(stat).toHaveProperty('showPlus');
          expect(stat).toHaveProperty('icon');

          expect(stat.stat).toBeUndefined();
          expect(stat.kind).toBeUndefined();

          expect(typeof stat.value).toBe('number');
          expect(typeof stat.showPlus).toBe('boolean');
        });
    });
  });

  // Status endpoints
  describe('/status', () => {
    it('GET /status - should return 200 and the current system status', () => {
      return request(app.getHttpServer())
        .get('/status')
        .expect(200)
        .expect((res) => {
          const body = res.body as StatusResponse;
          expect(body).toHaveProperty('status');
          expect(typeof body.status).toBe('string');

          const validStatuses = ['Online', 'Offline', 'Maintenance'];
          expect(validStatuses).toContain(body.status);
        });
    });

    it('GET /status - should return a non-empty status value', () => {
      return request(app.getHttpServer())
        .get('/status')
        .expect(200)
        .expect((res) => {
          const body = res.body as StatusResponse;
          expect(body.status.length).toBeGreaterThan(0);
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
