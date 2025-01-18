import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';
import {menu} from 
const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;

// const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;

export default getQueryClient;
