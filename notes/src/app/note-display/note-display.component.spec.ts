import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDisplayComponent } from './note-display.component';

describe('NoteDisplayComponent', () => {
  let component: NoteDisplayComponent;
  let fixture: ComponentFixture<NoteDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
