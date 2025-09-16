import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsRow } from './skills-row';

describe('SkillsRow', () => {
  let component: SkillsRow;
  let fixture: ComponentFixture<SkillsRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
