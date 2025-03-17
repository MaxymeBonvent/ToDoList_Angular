// Importations
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

// Décorateur App
@Component({
  standalone: true,
  selector: 'app-root', // Balise HTML
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, ItemComponent],
})

// Composant App
export class AppComponent {
  componentTitle = "To Do List";

  // Filtre
  filter: "all" | "active" | "done" = "all";

  // Liste de tâches
  allItems = 
  [
    { description: "Eat", done: true },
    { description: "Sleep", done: false },
    { description: "Play", done: false },
    { description: "Laugh", done: false },
  ];

  // Méthode pour ajouter une tâche à la liste de tâches
  addItem(description: string) 
  {
    // S'il n'y a pas de description
    if (!description)
    {
      // Afficher un message d'erreur
      console.log("Erreur: la tâche n'a pas de description.");
      return;
    } 
  
    // Ajouter la tâche à la liste.
    // The unshift() method of Array instances adds the specified elements to the beginning 
    // of an array and returns the new length of the array.
    this.allItems.unshift({
      description,
      done: false
    });
  }

  // Getter
  get items() 
  {
    if (this.filter === "all")
    {
      return this.allItems;
    }

    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  // Méthode pour supprimer une tâche
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}