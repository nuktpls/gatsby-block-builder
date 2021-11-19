import React from 'react'
import AlimentacaoIcon from '../../../../static/images/alimentacao-icon.svg'
import AtividadeIcon from '../../../../static/images/atividade-icon.svg'
import BemEstarIcon from '../../../../static/images/bem-estar-icon.svg'
import HabitosIcon from '../../../../static/images/habitos-icon.svg'
import GlicemiaIcon from '../../../../static/images/glicemia-icon.svg'
import PrevencaoIcon from '../../../../static/images/prevencao-icon.svg'
import TratamentoIcon from '../../../../static/images/tratamento-icon.svg'

const arrayButtons = [
	{
		linkUrl: 'alimentacao',
		text: 'Alimentação',
		icon: <AlimentacaoIcon />,
	},
	{
		linkUrl: 'atividade',
		text: 'Atividade Física',
		icon: <AtividadeIcon />,
	},
	{
		linkUrl: 'bem-estar',
		text: 'Bem-estar',
		icon: <BemEstarIcon />,
	},
	{
		linkUrl: 'bons-habitos',
		text: 'Bons Hábitos',
		icon: <HabitosIcon />,
	},
	{
		linkUrl: 'glicemia',
		text: 'Teste de Glicemia',
		icon: <GlicemiaIcon />,
	},
	{
		linkUrl: 'prevencao',
		text: 'Prevenção',
		icon: <PrevencaoIcon />,
	},
	{
		linkUrl: 'tratamento',
		text: 'Tratamento',
		icon: <TratamentoIcon />,
	},
]

export default arrayButtons
