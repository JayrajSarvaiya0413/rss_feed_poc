import { ApiProperty } from '@nestjs/swagger';
import { IsUrl, IsString } from 'class-validator';

export class CreateRssParserDto {
  @ApiProperty()
  @IsString()
  @IsUrl(undefined, { message: 'RSS feed URL is not valid.' })
  rssUrl: string;
}
