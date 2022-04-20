import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent extends BaseComponent implements OnInit {
  public cast = [
    {id: 1, name: 'Tabitha Bastien', image: 'cast/tabithaBastien.jpg', width: 160, position: 'Alecia'},
    {id: 2, name: 'Raymond Power', image: 'cast/RaymondPower.jpeg', width: 160, position: 'Jackson'},
    {id: 3, name: 'Russell Hodgkinson', image: 'cast/RussellHodgkinson.jpg', width: 160, position: 'The Bartender'},
    {id: 4, name: 'Jason Brooks', image: 'cast/jasonBrooks.jpeg', width: 160, position: 'Jason'},
    {id: 5, name: 'Kara Puerschner', image: 'cast/karaPuerschner.jpg', width: 160, position: 'Tara'},
    {id: 6, name: 'Angela DiMarco', image: 'cast/angelaDiMarco.jpg', width: 160, position: 'Janis'},
    {id: 7, name: 'Obadiah Freeman', image: 'cast/ObadiahFreeman.jpg', width: 160, position: 'Reggie'},
    {id: 8, name: 'Jon Ravenholt', image: 'cast/jonRavenholt.jpg', width: 160, position: 'The Detective'},
    {id: 1, name: 'Carrie Guthrie', image: 'cast/CarrieGuthrie.jpg', width: 100},
    {id: 1, name: 'Timothy Barnaby', image: 'cast/TimothyBar.jpg', width: 100},
    {id: 1, name: 'Mike Butters', image: 'cast/mikeButters.jpeg', width: 100},
    {id: 1, name: 'David Hogan', image: 'cast/davidHogan.jpg', width: 100},
    {id: 1, name: 'Michael Curd', image: 'cast/michaelCurd.png', width: 100},
    {id: 1, name: 'Amelia Samson', image: 'cast/ameliaSamson.jpeg', width: 100},
    {id: 1, name: 'Tanner Orcutt', image: 'cast/TannerOrcutt.jpg', width: 100},
    {id: 1, name: 'Allegra Sweeney', image: 'cast/allegraSweeney.JPG', width: 100},
    {id: 1, name: 'Nicholas Parsons', image: 'cast/NicholasJParsons.jpg', width: 100},
    {id: 1, name: 'Valerie Miller', image: 'cast/Miller_Valerie.jpg', width: 100},
    {id: 1, name: 'David Breyman', image: 'cast/davidBreyman.jpg', width: 100},
    {id: 1, name: 'Tyler Bocock', image: 'cast/TylerBocock.jpg', width: 100},
    {id: 1, name: 'Princeton Nunnery', image: 'cast/princetonNunnery.jpg', width: 100},
    {id: 1, name: 'Mackenzie Wynn', image: 'cast/mackenzieWynn.jpeg', width: 100},
    {id: 1, name: 'Jon Meggison', image: 'cast/jonMeggison.jpg', width: 100},
    {id: 1, name: 'Tommie Tucker', image: 'cast/tommieTucker.jpg', width: 100},
    {id: 1, name: 'Herb Weisbaum', image: 'cast/herbWeisbaum.jpg', width: 100},
  ];
  public crew = [
    {id: 1, name: 'Angela DiMarco', image: 'crew/angelaDiMarco.jpg', position: 'Producer', width: 160},
    {id: 1, name: 'John Hoffman', image: 'crew/JohnHoffman.jpg', position: 'Producer', width: 160},
    {id: 1, name: 'Rick Medved', image: 'crew/rick.jpg', position: 'Producer', width: 160},
    {id: 1, name: 'Tim Carpenter', image: 'crew/tim.jpg', position: 'Assistant Director', width: 160},
    {id: 1, name: 'Joe Castro', image: 'crew/joeCastro.jpg', position: 'FX Artist', width: 160},
    {id: 1, name: 'Stefan Scherperel', image: 'crew/StefanScherperel.jpg', position: 'Director of Photography', width: 160},
    {id: 1, name: 'Joel Barham', image: 'crew/joelBarham.jpg', position: 'Sound Engineer', width: 160},
    {id: 1, name: 'Anthony Espina', image: 'crew/anthonyEspina.jpg', position: 'Composer', width: 160},
    {id: 1, name: 'Tylor Jones', image: 'crew/tylorJones.jpg', position: 'Producer', width: 100},
    {id: 1, name: 'Hannah Krutsinger', image: 'crew/hannahKrutsinger.png', position: 'Hair & Makeup', width: 100},
    {id: 1, name: 'Melissa Miles', image: 'crew/melissaMiles.jpg', position: 'Casting Director', width: 100},
    {id: 1, name: 'Ben Kohler', image: 'crew/benKohler.jpg', position: 'Camera Operator', width: 100},
    {id: 1, name: 'Branden Woods', image: 'crew/brandenWoods.jpg', position: 'Gaffer', width: 100},
    {id: 1, name: 'Jay Lee', image: 'crew/jayLee.jpg', position: 'Assistant Director', width: 100},
    {id: 1, name: 'Cameron Price', image: 'crew/cameronLeePrice.jpg', position: 'Marketing', width: 100},
    {id: 1, name: 'Rosie Kohler', image: 'crew/rosieKohler.jpg', position: 'Production Assistant', width: 100},
    {id: 1, name: 'Luis Barriga', image: 'crew/LuisBarriga.jpg', position: 'Stunt Coordinator', width: 100},
    {id: 1, name: 'Michael Cahn', image: 'crew/michaelCahn.png', position: 'Camera Operator', width: 100},
    {id: 1, name: 'Bam Miller', image: 'crew/bamMiller.jpg', position: 'Set Design', width: 100},
    {id: 1, name: 'Jason Dressel', image: 'crew/JasonDressel.jpg', position: 'Hospitality', width: 100},
    {id: 1, name: 'Amber Kamhout', image: 'crew/amberKamhout.jpg', position: 'Hospitality', width: 100},
    {id: 1, name: 'Caleb Newbury', image: 'crew/calebNewbury.jpg', position: 'Camera', width: 100},
    {id: 1, name: 'Angelina Maciel', image: 'crew/angelinaMaciel.jpg', position: 'Wardrobe', width: 100},
    {id: 1, name: 'Eli Ziebell', image: 'crew/eliZiebell.jpg', position: 'Crew', width: 100},
    {id: 1, name: 'Sorin Dean', image: 'crew/sorinDean.jpg', position: 'Crew', width: 100},
    {id: 1, name: 'Nathan Kruger', image: 'crew/nathanKruger.jpg', position: 'Crew', width: 100},
  ];
  constructor() { super(); }

  ngOnInit(): void {
  }

}
