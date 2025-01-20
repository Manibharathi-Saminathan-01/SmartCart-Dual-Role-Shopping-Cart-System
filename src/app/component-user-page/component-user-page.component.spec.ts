import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUserPageComponent } from './component-user-page.component';

describe('ComponentUserPageComponent', () => {
  let component: ComponentUserPageComponent;
  let fixture: ComponentFixture<ComponentUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
