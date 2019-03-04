import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Preferences } from 'app/shared/model/preferences.model';
import { PreferencesService } from './preferences.service';
import { PreferencesComponent } from './preferences.component';
import { PreferencesDetailComponent } from './preferences-detail.component';
import { PreferencesUpdateComponent } from './preferences-update.component';
import { PreferencesDeletePopupComponent } from './preferences-delete-dialog.component';
import { IPreferences } from 'app/shared/model/preferences.model';

@Injectable({ providedIn: 'root' })
export class PreferencesResolve implements Resolve<IPreferences> {
    constructor(private service: PreferencesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPreferences> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Preferences>) => response.ok),
                map((preferences: HttpResponse<Preferences>) => preferences.body)
            );
        }
        return of(new Preferences());
    }
}

export const preferencesRoute: Routes = [
    {
        path: '',
        component: PreferencesComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: PreferencesDetailComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: PreferencesUpdateComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: PreferencesUpdateComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const preferencesPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: PreferencesDeletePopupComponent,
        resolve: {
            preferences: PreferencesResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'twentyOnePointsApp.preferences.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
