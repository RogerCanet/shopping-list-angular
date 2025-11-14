import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
  host: { 'ngSkipHydration': '' },
})
export class ShoppingList {
  newItemName: string = '';
  items: Item[] = [];

  addItem() {
    if (this.newItemName.trim()) {
      this.items.push({ name: this.newItemName.trim() });
      this.newItemName = '';
    }
  }

  removeItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
  }

}
