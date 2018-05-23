import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionwisecountryViewComponent } from './regionwisecountry-view.component';

describe('RegionwisecountryViewComponent', () => {
  let component: RegionwisecountryViewComponent;
  let fixture: ComponentFixture<RegionwisecountryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionwisecountryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionwisecountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
