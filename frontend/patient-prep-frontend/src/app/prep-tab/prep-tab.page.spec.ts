import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PrepTabPage } from './prep-tab.page';

describe('PrepTabPage', () => {
  let component: PrepTabPage;
  let fixture: ComponentFixture<PrepTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrepTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PrepTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
