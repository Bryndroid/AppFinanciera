import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class datosService{
    private placeholderEstado = {
  "banco": "Banco Cuscatlán S.A.",
  "sucursal": "San Salvador - Centro",
  "statement_id": "CUSC-TDC-202509-001",
  "tipo_cuenta": "CRÉDITO",
  "moneda": "USD",
  "numero_cuenta": "****4321",
  "titular": {
    "nombre": "JUAN PÉREZ",
    "dui": "****-****-*",
    "direccion": "Col. Escalón, San Salvador, El Salvador"
  },
  "periodo": {
    "desde": "2025-09-01",
    "hasta": "2025-09-30"
  },
   "fecha_emision": "2025-10-01",
  "limite_credito": 3000.00,
  "saldo_al_inicio": 1250.00,
  "saldo_al_cierre": 1923.00,
  "saldo_disponible": 1077.00,
  "tasa_interes_anual": 28.5,
  "pago_minimo_requerido": 96.00,
  "fecha_limite_pago": "2025-10-15",
  "totales": {
    "total_cargos": 1029.08,
    "total_abonos": 356.08,
    "intereses_cobrados": 15.25,
    "comisiones_cobradas": 3.62,
    "pago_minimo_requerido": 96.00,
    "pago_total_recomendado": 1923.00
  },
  "transacciones": [
    {
      "fecha": "2025-09-03",
      "descripcion": "Pago recibido - GRACIAS POR SU PAGO",
      "tipo": "ABONO",
      "monto": 250.00,
      "balance": 1000.00,
      "referencia": "PAG-20250903-1101",
      "canal": "CAJA"
    },
    {
      "fecha": "2025-09-06",
      "descripcion": "Compra - ELEKTRA S.A.",
      "tipo": "CARGO",
      "monto": 65.32,
      "balance": 1065.32,
      "referencia": "COMP-20250906-4421",
      "canal": "POS"
    },
    {
      "fecha": "2025-09-09",
      "descripcion": "Compra en línea - AMAZON.COM",
      "tipo": "CARGO",
      "monto": 150.00,
      "balance": 1215.32,
      "referencia": "WEB-20250909-990",
      "canal": "E-COMMERCE"
    },
    {
      "fecha": "2025-09-12",
      "descripcion": "Pago recibido vía transferencia",
      "tipo": "ABONO",
      "monto": 100.00,
      "balance": 1115.32,
      "referencia": "TRF-IN-20250912-01",
      "canal": "TRANSFERENCIA"
    },
    {
      "fecha": "2025-09-15",
      "descripcion": "Compra - SUPERMERCADO LA TORRE",
      "tipo": "CARGO",
      "monto": 120.75,
      "balance": 1236.07,
      "referencia": "POS-0915-778",
      "canal": "POS"
    },
    {
      "fecha": "2025-09-18",
      "descripcion": "Retiro de efectivo - CAJERO ATM",
      "tipo": "CARGO",
      "monto": 300.00,
      "balance": 1536.07,
      "referencia": "ATM-20250918-441",
      "canal": "CAJERO"
    },
    {
      "fecha": "2025-09-20",
      "descripcion": "Compra - TIENDA DE ROPA FASHION",
      "tipo": "CARGO",
      "monto": 89.99,
      "balance": 1626.06,
      "referencia": "POS-20250920-5521",
      "canal": "POS"
    },
    {
      "fecha": "2025-09-21",
      "descripcion": "Comisión por mantenimiento de cuenta",
      "tipo": "CARGO",
      "monto": 3.50,
      "balance": 1629.56,
      "referencia": "COM-20250921-01",
      "canal": "COMISIÓN"
    },
    {
      "fecha": "2025-09-22",
      "descripcion": "Compra - SERVICIO TELÉFONO MOVILTEL",
      "tipo": "CARGO",
      "monto": 38.90,
      "balance": 1668.46,
      "referencia": "PAG-20250922-330",
      "canal": "DOMICILIACIÓN"
    },
    {
      "fecha": "2025-09-24",
      "descripcion": "Compra en línea - E-COMMERCE",
      "tipo": "CARGO",
      "monto": 15.00,
      "balance": 1683.46,
      "referencia": "WEB-20250924-77",
      "canal": "E-COMMERCE"
    },
    {
      "fecha": "2025-09-25",
      "descripcion": "Compra - PAGO A PROVEEDOR",
      "tipo": "CARGO",
      "monto": 200.00,
      "balance": 1883.46,
      "referencia": "TRF-OUT-20250925-667",
      "canal": "TRANSFERENCIA"
    },
    {
      "fecha": "2025-09-27",
      "descripcion": "Interés mensual por financiamiento",
      "tipo": "CARGO",
      "monto": 15.25,
      "balance": 1898.71,
      "referencia": "INT-20250927-03B",
      "canal": "INTERÉS"
    },
    {
      "fecha": "2025-09-28",
      "descripcion": "Compra - GASOLINERA PUMA",
      "tipo": "CARGO",
      "monto": 24.29,
      "balance": 1923.00,
      "referencia": "POS-0928-884",
      "canal": "POS"
    }
  ],
  "notas": "Este estado de cuenta corresponde a una tarjeta de crédito ficticia. Los datos, montos y referencias son solo para fines demostrativos."
}
    
    constructor(){

    }

    transaccionesCuenta():Transaccion[]{
        const transacciones  = this.placeholderEstado.transacciones.map((t:any)  =>{
            return {
                fecha: t.fecha,
                descripcion: t.descripcion,
                tipo: t.tipo,
                monto: t.monto,
                balance: t.balance,
                canal: t.canal,
                referencia: t.referencia
            }
        })
        return transacciones;
    }
    transaccionesTiposGrafica(): Agrupacion[]{
        const resultado: Agrupacion[] = [];

        const tipos = [...new Set(this.placeholderEstado.transacciones.map(t => t.tipo))];

        tipos.forEach(tipo => {
            const costos = this.placeholderEstado.transacciones
            .filter(t => t.tipo === tipo)
            .map(t => t.monto);

            resultado.push({ tipo, costos });
        });

        return resultado;
    }
    cambiarDatos(transacciones:Transaccion){
      if(this.placeholderEstado.saldo_al_cierre >= this.placeholderEstado.limite_credito){
        alert("¡Has topado tu tarjeta de credito!. Recomendamos inmediatamente pagar a plazos el interes y la deuda");
        return
      }
      
      if(transacciones.tipo == "ABONO"){
        if(this.placeholderEstado.saldo_al_cierre <=0){
          alert("¡Ya pagaste todo tu saldo!")
          return;
        }
        this.placeholderEstado.saldo_al_cierre =  this.placeholderEstado.saldo_al_cierre - transacciones.monto;
      }else if(transacciones.tipo = "CARGO"){
        this.placeholderEstado.saldo_al_cierre = this.placeholderEstado.saldo_al_cierre + transacciones.monto
        
      }
      this.placeholderEstado.transacciones.push(transacciones);
    }
    transaccionesCategoriasGrafica(): AgrupacionDias[] {
  const categorias: Record<string, { costos: number; dias: string[] }> = {};

  this.placeholderEstado.transacciones.forEach(t => {
    let categoria = "otros";
    const desc = t.descripcion.toLowerCase();

    if (desc.includes("compra")) categoria = "compras";
    else if (desc.includes("retiro")) categoria = "retiros";
    else if (desc.includes("interés")) categoria = "intereses";
    else if (desc.includes("comisión")) categoria = "comisiones";
    else if (desc.includes("pago")) categoria = "pagos";
    else if (desc.includes("transferencia")) categoria = "transferencias";

    if (!categorias[categoria]) categorias[categoria] = { costos: 0, dias: [] };

    categorias[categoria].costos += t.monto;
    categorias[categoria].dias.push(t.fecha);
  });

  return Object.entries(categorias).map(([tipo, data]) => ({
    tipo,
    costos: parseFloat(data.costos.toFixed(2)),
    dias: data.dias
  }));
}

/*----- RESUMEN GENERAL -----*/

obtenerResumen() {
  const transacciones = this.placeholderEstado.transacciones as Transaccion[];
  const cargos = transacciones.filter(t => t.tipo === "CARGO");
  const abonos = transacciones.filter(t => t.tipo === "ABONO");

  const totalCargos = cargos.reduce((acc, t) => acc + t.monto, 0);
  const totalAbonos = abonos.reduce((acc, t) => acc + t.monto, 0);

  return {
    totalCargos,
    totalAbonos,
    cantidadCargos: cargos.length,
    cantidadAbonos: abonos.length,
    promedioCargo: parseFloat((totalCargos / (cargos.length || 1)).toFixed(2)),
    promedioAbono: parseFloat((totalAbonos / (abonos.length || 1)).toFixed(2))
  };
}

/*----- FRECUENCIA DE MOVIMIENTOS -----*/

obtenerFrecuencia() {
  const transacciones = this.placeholderEstado.transacciones as Transaccion[];
  const fechas = transacciones.map(t => new Date(t.fecha).getTime()).sort((a, b) => a - b);
  const diferencias = fechas.slice(1).map((f, i) => (f - fechas[i]) / (1000 * 3600 * 24));
  const promedioDias = diferencias.reduce((a, b) => a + b, 0) / (diferencias.length || 1);

  return {
    diasEntreTransacciones: parseFloat(promedioDias.toFixed(2)),
    totalTransacciones: transacciones.length
  };
}

/*----- PATRONES DE ABONOS -----*/

obtenerPatronAbonos() {
  const transacciones = this.placeholderEstado.transacciones as Transaccion[];
  const abonos = transacciones.filter(t => t.tipo === "ABONO");
  const porCanal = this.agruparPorCanal(abonos);

  return {
    totalAbonos: abonos.reduce((acc, t) => acc + t.monto, 0),
    cantidad: abonos.length,
    canales: porCanal
  };
}

/*----- PATRONES DE CARGOS -----*/

obtenerPatronCargos() {
  const transacciones = this.placeholderEstado.transacciones as Transaccion[];
  const cargos = transacciones.filter(t => t.tipo === "CARGO");
  const porCanal = this.agruparPorCanal(cargos);

  return {
    totalCargos: cargos.reduce((acc, t) => acc + t.monto, 0),
    cantidad: cargos.length,
    canales: porCanal
  };
}

/*----- CANALES DE USO GENERAL -----*/

obtenerCanalesUso() {
  const transacciones = this.placeholderEstado.transacciones as Transaccion[];
  return this.agruparPorCanal(transacciones);
}

/*----- TENDENCIA DEL SALDO (DEUDA) -----*/

obtenerTendenciaSaldo() {
  const saldoInicial = this.placeholderEstado.saldo_al_inicio;
  const saldoFinal = this.placeholderEstado.saldo_al_cierre;
  const saldoLimite = this.placeholderEstado.limite_credito;
  const tazaInteres = this.placeholderEstado.tasa_interes_anual;
  const pagoMinimo = this.placeholderEstado.pago_minimo_requerido;
  const fechaCorte = this.placeholderEstado.fecha_limite_pago;
  const variacion = saldoFinal - saldoInicial;

  return {
    saldoInicial,
    saldoFinal,
    saldoLimite,
    tazaInteres,
    pagoMinimo,
    fechaCorte,
    variacion: parseFloat(variacion.toFixed(2)),
    tendencia: variacion > 0 ? "AUMENTO_DE_DEUDA" : variacion < 0 ? "REDUCCIÓN_DE_DEUDA" : "SIN_CAMBIO"
  };
}

/*----- RESUMEN COMPLETO -----*/

obtenerResumenCompleto() {
  return {
    resumen: this.obtenerResumen(),
    frecuencia: this.obtenerFrecuencia(),
    abonos: this.obtenerPatronAbonos(),
    cargos: this.obtenerPatronCargos(),
    canales: this.obtenerCanalesUso(),
    tendenciaSaldo: this.obtenerTendenciaSaldo()
  };
}
/*--- PARAS CHART DE SALDO ---*/
obtenerEvolucionSaldo() {
  const fechas: string[] = [];
  const balances: number[] = [];
  for (const t of this.placeholderEstado.transacciones) {
    fechas.push(t.fecha);
    balances.push(t.balance);
  }
  return { fechas, balances };
}

/*----- AGRUPACIÓN POR CANAL -----*/

private agruparPorCanal(transacciones: Transaccion[]) {
  const canales: { [key: string]: { cantidad: number; montoTotal: number } } = {};
  transacciones.forEach(t => {
    if (!canales[t.canal]) canales[t.canal] = { cantidad: 0, montoTotal: 0 };
    canales[t.canal].cantidad++;
    canales[t.canal].montoTotal += t.monto;
  });
  return canales;
}

}