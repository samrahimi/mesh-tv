import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './components.component';
import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxFilterModule, IgxInputGroupModule } from 'igniteui-angular';

describe('ComponentsComponent', () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsComponent],
      imports: [ FormsModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxFilterModule, IgxInputGroupModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
