import { AvatarCreatorConfig } from '../types';
import { useMemo } from 'react';

export const useAvatarCreatorUrl = (subdomain: string, config: AvatarCreatorConfig | undefined): string => {
  return useMemo(() => {
    let url = `https://${subdomain || `demo`}.readyplayer.me`;

    if (config?.language) url += `/${config.language}`;
    url += `/avatar?frameApi`;
    if (config?.clearCache) url += '&clearCache';
    if (config?.quickStart) url += '&quickStart';
    if (config?.bodyType) url += `&bodyType=${config?.bodyType}`;
    if (config?.token) url += `&token=${config?.token}`;

    return url;
  }, [subdomain, config]);
};
