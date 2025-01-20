import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAdminPageComponent } from './component-admin-page.component';

describe('ComponentAdminPageComponent', () => {
  let component: ComponentAdminPageComponent;
  let fixture: ComponentFixture<ComponentAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
