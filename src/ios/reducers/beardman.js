'use strict';

import { List, Map } from 'immutable';

import {
	CHECK_BY_INTERVAL,
	COMPLETE,
	ADD_TASK,
	MARK_NEW_TASK,
	MARK_NEW_COMPLETED_TASK
} from '../actions/actionsConst';

export const MAX = 1000;
export const MIN = 0;
// export const CHECK_INTERVAL = 300000; //5min
export const CHECK_INTERVAL = 3000; //for tests every 1 sec

const POINTS_TO_ADD_TASK = MAX / 100 * 3;
const POINTS_TO_COMPLETE_TASK = MAX / 100 * 5;
const POINTS_BY_INTERVAL = MAX / 100;

const completeLastFrases = new List([
	'У тебя еще $1 заданий.',
	'Заканчивай эти $1 заданий.',
	'Еще $1 заданий.'
]);
const beardManVocabulary = new Map({
	angry: new List([
		'Ебана в рот, я заставлю тебя это сделать!',
		'Коля, ебашь, ебана в рот.',
		'Если ты слабак, нихуя у тебя не выйдет!',
		'Мне похуй, как ты это сделашь, но ты должен закончить!',
		'Закончи этот подход,  прямо здесь и прямо сейчас!',
		'А давай-ка еще разик! Гребаный разик, мать твою!',
		'Ебашь! Навали гавна, мылыш.',
		'Ленивый мудак!',
		'Ебашь! Навали гавна, мылыш.',
		'Пиздюк, настройся!'
	]),
	middle: new List([
		'Подкинь бодряка! Подкирь гавна в печку!',
		'Я иду своим путем сорок лет и такое чувство, что каждый день начинаю все с начала.',
		'Я хочу, чтобы ты работал так, будто завтра не наступит.'
	]),
	completeSmth: new List([
		'Давай, качни это гавно!',
		'Сгибай это дерьмо, как последний раз в жизни!',
		'Пампи, Коля, пампи баночки.',
		'Качайся, обсерайся!',
		'Пока не упадешь, ебашь!',
		'А давай-ка еще разик! Гребаный разик, мать твою!',
		'Ты думал это все, конец? Но я хочу еще пять разиков.',
		'Красавчик, ебана в рот.'
	]),
	completeSmthAngry: new List([
		'Еще повтор, чертов ублюдок!',
		'Ну-ка, возьми железку побольше.',
		'Не можешь  больше? Пошел на хуй! Давай еще раз.',
		'Еще повтор, чертов ублюдок.'
	]),
	notify: new List([
		'Даже не допускай ни одной мыслишки, чтобы все бросить!',
		'Этот тренажер как сучка, скучает за тобой',
		'Ну и хули ты задумал? Не стой, ебашь!',
		'Ленивый мудак!'
	])
}).update('completeSmth', smth => {
	return smth.map(str => str + ' ' + completeLastFrases.get(Math.floor(Math.random() * completeLastFrases.size)));
}).update('completeSmthAngry', smth => {
	return smth.map(str => str + ' ' + completeLastFrases.get(Math.floor(Math.random() * completeLastFrases.size)));
});

const initialState = new Map({
	angry: (MAX - MIN) / 2,
	numberOfWarnings: 0,
	hasNewCompletedTask: false,
	hasNewTask: false,
	message: beardManVocabulary.get('middle').get(Math.floor(Math.random() * beardManVocabulary.get('middle').size)),
	messageHash: Date.now()
});

export function beardman(state = initialState, action = {}) {
	switch(action.type) {
		case CHECK_BY_INTERVAL:
			return state
				.update('angry', a => a - POINTS_BY_INTERVAL)
				.update(state => {
					const angry = state.get('angry');
					const numberOfWarnings = state.get('numberOfWarnings');
					if(angry < 0 && numberOfWarnings === 0) {
						return state.set('angry', 0).set('numberOfWarnings', 1);
					} else if(angry < -100 && numberOfWarnings > 0) {
						return state.set('angry', 0).set('numberOfWarnings', numberOfWarnings + 1);
					} else {
						return state;
					}
				})
				.update(data => {
					const angry = data.get('angry');
					return data.update('message', () => {
						let texts = angry < 300 ?
							beardManVocabulary.get('angry') :
							beardManVocabulary.get('middle');
						return texts.get(Math.floor(Math.random() * texts.size));
					}).set('messageHash', Date.now());
				});
		case ADD_TASK:
			return state
				.update('angry', a => a + POINTS_TO_ADD_TASK)
				.set('hasNewTask', true)
				.update('angry', a => a + POINTS_TO_COMPLETE_TASK)
				.set('hasNewCompletedTask', true)
				.update(data => {
					const angry = data.get('angry');
					return data.update('message', () => {
						let texts = angry < 300 ?
							beardManVocabulary.get('completeSmthAngry') :
							beardManVocabulary.get('completeSmth');
						return texts.get(Math.floor(Math.random() * texts.size));
					}).set('messageHash', Date.now());
				});
		case COMPLETE:
			return state
				.update('angry', a => a + POINTS_TO_COMPLETE_TASK)
				.set('hasNewCompletedTask', true)
				.update(data => {
					const angry = data.get('angry');
					return data.update('message', () => {
						let texts = angry < 300 ?
							beardManVocabulary.get('completeSmthAngry') :
							beardManVocabulary.get('completeSmth');
						return texts.get(Math.floor(Math.random() * texts.size));
					}).set('messageHash', Date.now());
				});
		case MARK_NEW_TASK:
			return state.set('hasNewTask', false);
		case MARK_NEW_COMPLETED_TASK:
			return state.set('hasNewCompletedTask', false);
		default:
			return state;
	}
}