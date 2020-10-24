import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventModelPage } from './event-model.page';

describe('EventModelPage', () => {
  let component: EventModelPage;
  let fixture: ComponentFixture<EventModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
