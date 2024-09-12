/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoddNews_Common_NewsArticle } from '../models/CoddNews_Common_NewsArticle';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NewsArticleService {
    /**
     * Получение списка новостных статей.
     * @param limit Количество записей.
     * @param offset Смещение.
     * @returns CoddNews_Common_NewsArticle OK
     * @throws ApiError
     */
    public static getNewsArticleAll(
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<CoddNews_Common_NewsArticle>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: 'https://rsocodd.fineroad.ru/NewsArticle/all',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Получение новостной статьи по идентификатору.
     * @param sourceUrl Идентификатор новостной статьи.
     * @returns CoddNews_Common_NewsArticle OK
     * @throws ApiError
     */
    public static getNewsArticleGet(
        sourceUrl?: string,
    ): CancelablePromise<CoddNews_Common_NewsArticle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: 'https://rsocodd.fineroad.ru/NewsArticle/get',
            query: {
                'sourceUrl': sourceUrl,
            },
        });
    }
    /**
     * Получение изображения по идентификатору изображения новостной статьи.
     * @param imageSource Идентификатор новостной статьи.
     * @returns any OK
     * @throws ApiError
     */
    public static getNewsArticleImage(
        imageSource?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: 'https://rsocodd.fineroad.ru/NewsArticle/image',
            query: {
                'imageSource': imageSource,
            },
        });
    }
}
