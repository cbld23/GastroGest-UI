import { TestBed } from '@angular/core/testing';
import { ProductoService } from './producto.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProductoService', () => {
  let service: ProductoService;
  let httpClientMock: any;

  beforeEach(() => {
    httpClientMock = {
      get: jasmine.createSpy('get').and.returnValue(of([])),
      post: jasmine.createSpy('post').and.returnValue(of({})),
      put: jasmine.createSpy('put').and.returnValue(of({})),
      delete: jasmine.createSpy('delete').and.returnValue(of({}))
    };

    TestBed.configureTestingModule({
      providers: [
        ProductoService,
        { provide: HttpClient, useValue: httpClientMock }, // Mock para HttpClient
      ],
    });

    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call HttpClient.get when getAllProductos is called', () => {
    service.getAllProductos().subscribe();
    expect(httpClientMock.get).toHaveBeenCalledWith('http://localhost:8080/api/productos');
  });
});
