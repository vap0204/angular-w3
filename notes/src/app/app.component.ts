import { Component } from '@angular/core';
import { Note } from '../note';
import { NoteInputComponent } from './note-input/note-input.component';
import { NoteDisplayComponent } from './note-display/note-display.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteInputComponent, NoteDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;

  notes: Note[] = [];
  selectedNote: Note | null = null;

  addOrUpdateNote(note: Note) {
    if (this.selectedNote && this.notes.includes(this.selectedNote)) {
      const index = this.notes.indexOf(this.selectedNote);
      this.notes[index] = note;
    } else {
      this.notes.push(note);
    }
    this.selectedNote = null;
  }

  setSelectedNote(note: Note) {
    this.selectedNote = note;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
