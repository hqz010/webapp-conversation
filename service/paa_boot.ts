import axios, { AxiosResponse } from 'axios';
import { PAA_BOOT_URL_BASE } from '@/config'

// 调用 paa-boot的getFreeNumTotal API,查询剩余免费次数
export default async function callGetFreeNumTotalApi(key: string, keyType: number): Promise<number> {
    try {
        // 使用 Axios 或其他 HTTP 请求库发送 GET 请求
        const response = await axios.get(PAA_BOOT_URL_BASE + 'sys/api/customer/getFreeNumTotal', {
            params: {
                key: key,
                keyType: keyType, // 你的 keyType 值
            },
        });

        // 解析 API 响应数据
        const freeNum: number = response.data;

        return freeNum;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
}

// 创建一个函数来调用 paa-boot的API
export async function callCheckVipByKeyApi(key: string, keyType: number): Promise<number> {
    try {
        // 使用 Axios 或其他 HTTP 请求库发送 GET 请求
        const response = await axios.get(PAA_BOOT_URL_BASE + 'sys/api/customer/checkVipByKey', {
            params: {
                key: key,
                keyType: keyType, // 你的 keyType 值
            },
        });

        // 解析 API 响应数据
        const isVip: number = response.data.result.isVip;

        return isVip;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
}

// 创建一个函数来调用 paa-boot的API
export async function callDeductDialogueNumApi(key: string, keyType: number): Promise<number> {
    try {
        // 使用 Axios 或其他 HTTP 请求库发送 GET 请求
        const response = await axios.get(PAA_BOOT_URL_BASE + 'sys/api/customer/deductDialogueNum', {
            params: {
                key: key,
                keyType: keyType, // 你的 keyType 值
            },
        });

        // 解析 API 响应数据
        const state: number = response.data;

        return state;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
}
