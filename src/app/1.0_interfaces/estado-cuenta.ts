 interface EstadoCuenta {
  banco: string;
  sucursal: string;
  statement_id: string;
  tipo_cuenta: string;
  moneda: string;
  numero_cuenta: string;
  titular: {
    nombre: string;
    dui: string;
    direccion: string;
  };
  periodo: {
    desde: string;
    hasta: string;
  };
  fecha_emision: string;
  saldo_al_inicio: number;
  saldo_al_cierre: number;
  totales: {
    total_debitos: number;
    total_creditos: number;
    intereses_acreditados: number;
    comisiones_cobradas: number;
  };
  transacciones: Transaccion[];
  notas: string;
}