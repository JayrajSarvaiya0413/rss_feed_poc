import { Injectable } from '@nestjs/common';
import { RssParser } from './entities/rss-parser.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RssParserRepository {
  constructor(
    @InjectRepository(RssParser)
    private readonly rssParserRepository: Repository<RssParser>,
  ) {}

  /**
   * Create an RSS data entry if it does not already exist based on the provided GUID.
   *
   * @param title - The title of the RSS data entry.
   * @param link - The link associated with the RSS data entry.
   * @param guid - The globally unique identifier (GUID) for the RSS data entry.
   * @param pubDate - The publication date of the RSS data entry.
   * @returns A Promise that resolves to the created RSS data entry.
   */
  async createRssDataEntry(
    title: string,
    link: string,
    guid: string,
    pubDate: string,
  ): Promise<RssParser> {
    const existingRecord = await this.rssParserRepository.findOne({
      where: { guid },
    });

    if (!existingRecord) {
      const rssFeedData = new RssParser();
      rssFeedData.title = title;
      rssFeedData.link = link;
      rssFeedData.guid = guid;
      rssFeedData.date = pubDate;

      return this.rssParserRepository.save(rssFeedData);
    }
    // const message = 'Duplicate Data';
    // return { message };
  }

  /**
   * Retrieve all RSS data entries from the repository.
   *
   * @returns A Promise that resolves to an array of RSS data entries.
   */
  async getAllData(): Promise<RssParser[]> {
    return await this.rssParserRepository.find();
  }
}
