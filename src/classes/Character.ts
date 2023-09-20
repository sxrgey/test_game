export interface Parametrs {
  strength: number; // сила
  agility: number; // ловкость
  intelligence: number; // интелект
  charisma: number; // харизма
  vitality?: number; // жизненная сила
  evasion?: number; // уклонение
  vigor?: number; // энергичность
}

export interface Skills {  
  attack: number; // атака
  stealth: number; // стелс
  archery: number; // стрельба из лука
  learning: number; // обучаемость
  survival: number; // выживание
  medicine: number; // медицина
  intimidation: number; // запугивание
  insight: number; // проницательность
  appearance: number; // внешний вид
  manipulation: number; // манипулирование 
}


export class Character {

  private name: string;
  private parametrs: Parametrs;
  private skiils: Skills;

  constructor(name: string, parametrs: Parametrs) {
    this.name = name;
    this.parametrs = parametrs;
    this.parametrs.vitality = 3 + this.parametrs.strength;
    this.parametrs.evasion = 10 + this.parametrs.agility;
    this.parametrs.vigor = this.parametrs.agility + this.parametrs.intelligence;

    this.skiils = {
      attack: 0,
      stealth: 0,
      archery: 0,
      learning: 0,
      survival: 0,
      medicine: 0,
      intimidation: 0,
      insight: 0,
      appearance: 0,
      manipulation: 0,
    }
  }

  //Сетеры задаваемых полей
  public setName(name: string): void {
    this.name = name;
  }

  public setStrength(strength: number): void {
    this.parametrs.strength = strength;
  }

  public setAgility(agility: number): void {
    this.parametrs.agility = agility;
  }

  public setIntelligence(intelligence: number): void {
    this.parametrs.intelligence = intelligence;
  }
  
  public setCharisma(charisma: number): void {
    this.parametrs.charisma = charisma;
  }

  public makeDamage(): void {
    if (this.parametrs.vitality) {
      this.parametrs.vitality--;
    }
  }

  //методы для тренировки скиллов
  public trainAttack(): void {
    if (this.skiils.attack < this.parametrs.strength) {
      this.skiils.attack++;
    }
  }

  public trainStealth(): void {
    if (this.skiils.stealth < this.parametrs.agility) {
      this.skiils.stealth++;
    }
  }

  public trainArchery(): void {
    if (this.skiils.archery < this.parametrs.agility) {
      this.skiils.archery++;
    }
  }

  public trainLearning(): void {
    if (this.skiils.learning < this.parametrs.intelligence) {
      this.skiils.learning++;
    }
  }

  public trainSurvival(): void {
    if (this.skiils.survival < this.parametrs.intelligence) {
      this.skiils.survival++;
    }
  }

  public trainMedicine(): void {
    if (this.skiils.medicine < this.parametrs.intelligence) {
      this.skiils.medicine++;
    }
  }

  public trainIntimidation(): void {
    if (this.skiils.intimidation < this.parametrs.charisma) {
      this.skiils.intimidation++;
    }
  }

  public trainInsight(): void {
    if (this.skiils.insight < this.parametrs.charisma) {
      this.skiils.insight++;
    }
  }

  public trainAppearance(): void {
    if (this.skiils.appearance < this.parametrs.charisma) {
      this.skiils.appearance++;
    }
  }

  public trainManipulation(): void {
    if (this.skiils.manipulation < this.parametrs.charisma) {
      this.skiils.manipulation++;
    }
  }



}