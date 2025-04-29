import { Test, TestingModule } from '@nestjs/testing';
import { MenuRepoService } from './menu-repo.service';

describe('MenuRepoService', () => {
  let service: MenuRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuRepoService],
    }).compile();

    service = module.get<MenuRepoService>(MenuRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
