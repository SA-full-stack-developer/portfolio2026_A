import { Test, TestingModule } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

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

  afterAll(async () => {
    await app.close();
  });
});
