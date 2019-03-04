import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'blood-pressure',
                loadChildren: './blood-pressure/blood-pressure.module#TwentyOnePointsBloodPressureModule'
            },
            {
                path: 'weight',
                loadChildren: './weight/weight.module#TwentyOnePointsWeightModule'
            },
            {
                path: 'points',
                loadChildren: './points/points.module#TwentyOnePointsPointsModule'
            },
            {
                path: 'preferences',
                loadChildren: './preferences/preferences.module#TwentyOnePointsPreferencesModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyOnePointsEntityModule {}
