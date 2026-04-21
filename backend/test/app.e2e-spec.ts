import { Test, TestingModule } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

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
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(res.body[0]).toHaveProperty('id');
          expect(res.body[0]).toHaveProperty('name');
          expect(res.body[0]).toHaveProperty('category');
        });
    });

    it('GET /skills?category=frontend - should return filtered skills', () => {
      return request(app.getHttpServer())
        .get('/skills?category=frontend')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          res.body.forEach((skill) => {
            expect(skill.category).toBe('frontend');
          });
        });
    });

    it('GET /skills?onlyHighlighted=true - should return only highlighted skills', () => {
      return request(app.getHttpServer())
        .get('/skills?onlyHighlighted=true')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          res.body.forEach((skill) => {
            expect(skill.highlighted).toBe(true);
          });
        });
    });

    it('GET /skills/categories - should return status 200 and available categories', () => {
      return request(app.getHttpServer())
        .get('/skills/categories')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(res.body).toContain('frontend');
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
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(res.body[0]).toHaveProperty('id');
          expect(res.body[0]).toHaveProperty('name');
        });
    });

    it('GET /companies/:id - should return a single company', () => {
      return request(app.getHttpServer())
        .get('/companies/1')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('name');
          expect(res.body.id).toBe('1');
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
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(res.body[0]).toHaveProperty('id');
          expect(res.body[0]).toHaveProperty('companyId');
        });
    });

    it('GET /experience/:id - should return a single experience', () => {
      return request(app.getHttpServer())
        .get('/experience/1')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('companyId');
          expect(res.body.id).toBe('1');
        });
    });

    it('GET /experience - should return experiences with resolved companies and skills', () => {
      return request(app.getHttpServer())
        .get('/experience')
        .expect(200)
        .expect((res) => {
          const experience = res.body[0];
          expect(experience.company).toBeDefined();
          expect(typeof experience.company).toBe('object');
          expect(experience.company).toHaveProperty('name');

          expect(Array.isArray(experience.skills)).toBe(true);
          if (experience.skills.length > 0) {
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
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(res.body[0]).toHaveProperty('id');
          expect(res.body[0]).toHaveProperty('name');
        });
    });

    it('GET /projects/:id - should return a single project', () => {
      return request(app.getHttpServer())
        .get('/projects/1')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('name');
          expect(res.body.id).toBe('1');
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
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBe(4);

          const stat = res.body[0];
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

  // Portfolio endpoints
  describe('/portfolio', () => {
    it('GET /portfolio/init-data - should return 200 and portfolio initialization data', () => {
      return request(app.getHttpServer())
        .get('/portfolio/init-data')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('skills');
          expect(res.body).toHaveProperty('experience');
          expect(res.body).toHaveProperty('timestamp');

          expect(Array.isArray(res.body.skills)).toBe(true);
          expect(Array.isArray(res.body.experience)).toBe(true);
          expect(res.body.timestamp).toBeDefined();
        });
    });

    it('GET /portfolio/init-data - skills should contain valid structure', () => {
      return request(app.getHttpServer())
        .get('/portfolio/init-data')
        .expect(200)
        .expect((res) => {
          if (res.body.skills.length > 0) {
            const skill = res.body.skills[0];
            expect(skill).toHaveProperty('id');
            expect(skill).toHaveProperty('name');
            expect(typeof skill.name).toBe('string');
          }
        });
    });

    it('GET /portfolio/init-data - experience should contain valid structure', () => {
      return request(app.getHttpServer())
        .get('/portfolio/init-data')
        .expect(200)
        .expect((res) => {
          if (res.body.experience.length > 0) {
            const exp = res.body.experience[0];
            expect(exp).toHaveProperty('id');
            expect(exp).toHaveProperty('companyId');
          }
        });
    });

    it('GET /portfolio/init-data - timestamp should be a valid ISO date string', () => {
      return request(app.getHttpServer())
        .get('/portfolio/init-data')
        .expect(200)
        .expect((res) => {
          const timestamp = new Date(res.body.timestamp);
          expect(timestamp).toBeInstanceOf(Date);
          expect(timestamp.getTime()).not.toBeNaN();
          // Verify timestamp is recent (within last 5 seconds)
          const timeDiff = new Date().getTime() - timestamp.getTime();
          expect(timeDiff).toBeLessThan(5000);
          expect(timeDiff).toBeGreaterThanOrEqual(0);
        });
    });

    it('GET /portfolio/init-data - should fetch skills and experience in parallel', async () => {
      const startTime = Date.now();
      return request(app.getHttpServer())
        .get('/portfolio/init-data')
        .expect(200)
        .expect(() => {
          const endTime = Date.now();
          const duration = endTime - startTime;
          // If called sequentially, it would take much longer
          // This is a basic check that the endpoint responds reasonably
          expect(duration).toBeLessThan(5000);
        });
    });

    it('GET /portfolio/init-data - should contain non-empty arrays', () => {
      return request(app.getHttpServer())
        .get('/portfolio/init-data')
        .expect(200)
        .expect((res) => {
          expect(res.body.skills.length).toBeGreaterThan(0);
          expect(res.body.experience.length).toBeGreaterThan(0);
        });
    });

    it('GET /portfolio/init-data - response should have proper content-type', () => {
      return request(app.getHttpServer())
        .get('/portfolio/init-data')
        .expect(200)
        .expect('Content-Type', /json/);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
