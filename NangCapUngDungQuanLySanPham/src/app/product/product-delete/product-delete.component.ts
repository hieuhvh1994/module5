import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  id: any;

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
    })
  }

  ngOnInit(): void {

  }

  deleteProduct(id: number) {
    this.productService.deleteById(id);
    this.router.navigate(['/product/list']);
  }

  backToList() {
    this.router.navigate(['/product/list']);
  }

}
