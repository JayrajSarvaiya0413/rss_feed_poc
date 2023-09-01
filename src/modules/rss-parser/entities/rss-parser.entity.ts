import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'RSS_FEED_DATA' })
// @Unique(['guid']) // Define 'guid' as a unique constraint
export class RssParser {
  @PrimaryGeneratedColumn({ name: 'RSS_DATA_KEY' })
  rssDataKey: number;

  @Column({ name: 'TITLE', length: 1000 })
  title: string;

  @Column({ name: 'LINK', length: 1000 })
  link: string;

  @Column({ name: 'GUID', unique: true })
  guid: string;

  @Column({ default: null })
  date: string;
}
