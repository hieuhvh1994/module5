import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  productForm: any;
  id: any;

  constructor(
    private productService: ProductService,
    private activeRouted: ActivatedRoute
  ) {
    this.activeRouted.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      const product = this.productService.findById(this.id);

      if (product === undefined) {
        console.log("Can't find this product!!")
      } else {

        this.productForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description)
        });
      }
    });

  }

  ngOnInit() {



  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateById(id, product);
    alert("Cập nhật thành công!!")
  }
}
