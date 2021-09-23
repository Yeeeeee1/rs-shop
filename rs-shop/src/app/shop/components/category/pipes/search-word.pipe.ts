import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchWord',
})
export class SearchWordPipe implements PipeTransform {
  transform(videoData: any[], word: string): any[] {
    return videoData.filter((value: any) =>
      value.name.toLowerCase().includes(word.toLowerCase())
    );
  }
}
