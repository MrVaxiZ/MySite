import { Component, OnInit } from '@angular/core';
import { Skill } from '../../Data/Skill';
import { SkillsData } from '../../Interfaces/SkillData';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = SkillsData;

  constructor() { }

  ngOnInit(): void {
  }
}
