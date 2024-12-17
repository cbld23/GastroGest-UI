import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Chart, ChartDataset, registerables } from 'chart.js';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  productos: Producto[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  private chart: Chart | undefined;

  constructor(private productoService: ProductoService, private router: Router) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getAllProductos().subscribe((data) => {
      this.productos = data;
      this.createChart();
    });
  }

  createChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const stockData = this.productos.map((producto) => producto.stock);

    const redCount = stockData.filter((stock) => stock < 25).length;
    const yellowCount = stockData.filter((stock) => stock >= 25 && stock <= 50).length;
    const greenCount = stockData.filter((stock) => stock > 50).length;

    const aggregatedData = [redCount, yellowCount, greenCount];
    const colors = ['rgba(255, 99, 132, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'];
    const labels = ['Menos de 25', 'Entre 25 y 50', 'Más de 50'];

    const chartData: ChartDataset<'doughnut'> = {
      data: aggregatedData,
      backgroundColor: colors,
    };

    const canvas = document.getElementById('stockChart') as HTMLCanvasElement;
    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [chartData],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    }
  }

  goToCreate(): void {
    this.router.navigate(['/productos/new']);
  }

  editProducto(id: number): void {
    this.router.navigate(['/productos/edit', id]);
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter((producto) => producto.id !== id);
      this.createChart();
    });
  }
  getStockColor(stock: number): string {
    if (stock < 25) {
      return 'rgba(255, 99, 132, 0.8)';
    } else if (stock >= 25 && stock <= 50) {
      return 'rgba(255, 206, 86, 0.8)';
    } else {
      return 'rgba(75, 192, 192, 0.8)';
    }
  }

}


