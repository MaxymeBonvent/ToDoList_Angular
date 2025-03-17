// Importations
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";

// Décorateur
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

// Composant Item
export class ItemComponent {

  editable = false;

  // The ! in the class' property declaration is called a definite assignment assertion.
  @Input() item!: Item;

  // remove est une propriété
  @Output() remove = new EventEmitter<Item>();

  // Méthode pour sauvegarder la nouvelle description d'une tâche
  saveItem(description: string) {

    // S'il n'y a pas de description
    if(!description)
    {
      // Afficher un message d'erreur
      console.log("Erreur: la tâche n'a pas de description.");
      return;
    } 

    // Rendre la tâche non-modifiable
    this.editable = false;

    // Remplacer la description actuelle de la tâche par celle entrée dans le champ de saisie
    this.item.description = description;
  }
}
