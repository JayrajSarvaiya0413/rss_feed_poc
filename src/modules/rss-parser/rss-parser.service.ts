import { Injectable } from '@nestjs/common';
import { CreateRssParserDto } from './dto/create-rss-parser.dto';
import * as Parser from 'rss-parser';
import { RssParserRepository } from './rss-parser.repository';

const parser = new Parser();

@Injectable()
export class RssParserService {
  constructor(private rssParserRepository: RssParserRepository) {}

  /**
   * Parse and process an RSS feed from the provided URL.
   *
   * @param createRssParserDto - DTO (Data Transfer Object) containing the RSS feed URL.
   * @returns An array of parsed RSS data entries or a message if no data is added.
   */
  async createRssParser(createRssParserDto: CreateRssParserDto) {
    // try {
    const feed = await parser.parseURL(createRssParserDto.rssUrl);

    const rssDataEntries = await Promise.all(
      feed.items.map(async (item) => {
        const rssDataParserResponse =
          await this.rssParserRepository.createRssDataEntry(
            item.title,
            item.link,
            item.guid,
            item.pubDate,
          );

        return rssDataParserResponse; // You can return this if needed
      }),
    );

    const data = rssDataEntries.filter((value) => value !== undefined);
    const message = {
      message: 'No data Added',
    };
    if (data.length > 0) {
      return data;
    }
    return message;
  }

  /**
   * Retrieve all parsed RSS data entries.
   *
   * @returns An array of RSS data entries.
   */
  async getAllData() {
    return this.rssParserRepository.getAllData();
  }
}
