import { Controller, Post, Body, Get } from '@nestjs/common';
import { RssParserService } from './rss-parser.service';
import { CreateRssParserDto } from './dto/create-rss-parser.dto';

@Controller()
export class RssParserController {
  constructor(private readonly rssParserService: RssParserService) {}

  @Post('add/rss-parser')
  createRssParser(@Body() createRssParserDto: CreateRssParserDto) {
    return this.rssParserService.createRssParser(createRssParserDto);
  }

  @Get('get/rss-parser')
  getAllData() {
    return this.rssParserService.getAllData();
  }
}
