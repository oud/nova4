import { Component, OnInit, inject } from '@angular/core';

import SharedModule from 'app/shared/shared.module';

import { GatewayRoute } from './gateway-route.model';
import { GatewayRoutesService } from './gateway-routes.service';

@Component({
  selector: 'jhi-gateway',
  templateUrl: './gateway.html',
  providers: [GatewayRoutesService],
  imports: [SharedModule],
})
export default class Gateway implements OnInit {
  gatewayRoutes: GatewayRoute[] = [];
  updatingRoutes = false;

  private readonly gatewayRoutesService = inject(GatewayRoutesService);

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.updatingRoutes = true;
    this.gatewayRoutesService.findAll().subscribe(gatewayRoutes => {
      this.gatewayRoutes = gatewayRoutes;
      this.updatingRoutes = false;
    });
  }
}
