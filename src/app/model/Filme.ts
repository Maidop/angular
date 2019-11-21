import {Ator} from './Ator';
import {ClassificacaoEnum} from '../enumerations/classificacao.enum';

export class Filme {

  id: number;
  titulo: string;
  dataLancamento: Date;
  precoBilhete: number;
  dataCadastro: Date;
  genero: string;
  atorList: Ator[];
  classificacao: ClassificacaoEnum;
  inativo: boolean;
  dimensao: boolean;

  constructor() {
    this.dataCadastro = new Date();
    this.atorList = [];
    this.inativo = false;
    this.dimensao = false;
  }
}
