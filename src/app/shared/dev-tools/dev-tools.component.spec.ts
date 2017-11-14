import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevToolsComponent } from './dev-tools.component';

describe('DevToolsComponent', () => {
  let component: DevToolsComponent;
  let fixture: ComponentFixture<DevToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
