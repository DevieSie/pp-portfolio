import { Component, inject, signal } from '@angular/core';
import { Quote } from '../../model/quote';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class QuoteComponent {
  private http = inject(HttpClient);

  quote = signal('');
  author = signal('');

  ngOnInit() {
    this.http.get<Quote>('https://dvbfeatures.blob.core.windows.net/blog-util-files/todayQuote.txt')
      .subscribe(data => {
        this.quote.set(data.RowKey);
        this.author.set(data.Author);
      });
    }
}
