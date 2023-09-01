import { Module } from '@nestjs/common';
import { RssParserService } from './rss-parser.service';
import { RssParserController } from './rss-parser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RssParser } from './entities/rss-parser.entity';
import { RssParserRepository } from './rss-parser.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RssParser])],
  controllers: [RssParserController],
  providers: [RssParserService, RssParserRepository],
  exports: [RssParserService],
})
export class RssParserModule {}
