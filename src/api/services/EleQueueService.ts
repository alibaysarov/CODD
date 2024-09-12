/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoddNews_Common_EleQueue } from '../models/CoddNews_Common_EleQueue';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EleQueueService {
    /**
     * Получение отфильтрованного списка электронных очередей.
     * @param numberLike Поиск по номеру автомобиля.
     * @param dateRegStart Дата регистрации больше.
     * @param dateRegEnd Дата регистрации меньше.
     * @param limit Количество записей.
     * @param offset Смещение.
     * @returns CoddNews_Common_EleQueue OK
     * @throws ApiError
     */
    public static getEleQueue(
        numberLike?: string,
        dateRegStart?: string,
        dateRegEnd?: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<CoddNews_Common_EleQueue>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/EleQueue',
            query: {
                'numberLike': numberLike,
                'dateRegStart': dateRegStart,
                'dateRegEnd': dateRegEnd,
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
