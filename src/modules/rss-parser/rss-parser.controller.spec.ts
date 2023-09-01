import { Test, TestingModule } from '@nestjs/testing';
import { RssParserController } from './rss-parser.controller';
import { RssParserService } from './rss-parser.service';

describe('RssParserController', () => {
  let controller: RssParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RssParserController],
      providers: [RssParserService],
    }).compile();

    controller = module.get<RssParserController>(RssParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
