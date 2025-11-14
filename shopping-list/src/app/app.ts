import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shopping-list');
}
