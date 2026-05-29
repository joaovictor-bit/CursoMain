import styles from './styles.module.css'

import { Container } from '../Components/Container'

import { InputPadrao } from '../Components/InputPadrao'
import {Pencil,X} from 'lucide-react'




export interface Curso{
    id: string; 
    nome: string;
    periodo: string;
}


interface ListaCursosProps{
    cursos: Curso[];
    aoEditar:(curso:Curso)=>void; 
    aoExcluir:(id:string)=>void; 
}

export function ListaCursos({cursos,aoEditar,aoExcluir}:ListaCursosProps){
    return(
        <>
        
    
    

        <Container>

            <section className={styles.listarContainer}>
                <h2 className={styles.titulo}> Lista de Cursos </h2>

                <div className={styles.buscaContainer}>
                    <InputPadrao
                    type= 'text'
                    placeholder='Buscar Curso pelo nome'
                     />
                     </div>

                     <table className={styles.tabela}>
                        <thead>
                                <th> Curso </th>
                                <th> Período </th>                                                        
                                <th> ações </th>
                        </thead>

                        <tbody>
                            {cursos.map((curso)=>(
                                <tr key={curso.id}>
                                    <td>{curso.nome}</td>
                                    <td>{curso.periodo}</td>
                                    <td>
                                        <button
                                        className={styles.actionButton}
                                        title='Editar'
                                        onClick={()=>aoExcluir(curso.id)}
                                        >
                                            <span> <X size={18}/></span>
                                            </button> 
                                    </td>
                                </tr>


                            )
                            
                            
                            )}
                            
                        </tbody>
                     </table>
            </section>
</Container>
        
        
        
        </>
    )




}