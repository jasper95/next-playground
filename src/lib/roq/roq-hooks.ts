
/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { SWRRequestOptions, defaultBrowserClient } from './roq-client'
import { RequestOptions } from './roq-baas-sdk';
import {
  
    UserProfilesQuery,
    UserProfilesQueryVariables,
  
    UserProfileQuery,
    UserProfileQueryVariables,
  
    RolesQuery,
    RolesQueryVariables,
  
    RoleQuery,
    RoleQueryVariables,
  
    UserInvitesQuery,
    UserInvitesQueryVariables,
  
    UserInviteQuery,
    UserInviteQueryVariables,
  
    FilesQuery,
    FilesQueryVariables,
  
    FileQuery,
    FileQueryVariables,
  
    FileCategoryContentTypesQuery,
    FileCategoryContentTypesQueryVariables,
  
    FileCategoryContentGroupQuery,
    FileCategoryContentGroupQueryVariables,
  
    FileCategoryContentGroupsQuery,
    FileCategoryContentGroupsQueryVariables,
  
    FileCategoriesQuery,
    FileCategoriesQueryVariables,
  
    FileCategoryQuery,
    FileCategoryQueryVariables,
  
} from '@roq/client';

 
export function useOrganizationFindMany<
  T extends Prisma.organizationFindManyArgs,
  R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useOrganizationFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.organization.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationCount<T extends Prisma.organizationCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.organizationCountArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useOrganizationCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.organization.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindManyWithCount<
  T extends Prisma.organizationFindManyArgs,
  R extends { data: GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useOrganizationFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.organization.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindFirst<
  T extends Prisma.organizationFindFirstArgs,
  R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindFirstArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useOrganizationFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.organization.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
 
export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  roqClient = defaultBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}


  
export function useRoqPlatformUserProfiles(
  args?: UserProfilesQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<UserProfilesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserProfiles', args || {}]);
  return useSWR<UserProfilesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userProfiles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformUserProfile(
  args: UserProfileQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<UserProfileQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserProfile', args || {}]);
  return useSWR<UserProfileQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userProfile(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformRoles(
  args?: RolesQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<RolesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformRoles', args || {}]);
  return useSWR<RolesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.roles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformRole(
  args: RoleQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<RoleQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformRole', args || {}]);
  return useSWR<RoleQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.role(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformUserInvites(
  args?: UserInvitesQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<UserInvitesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserInvites', args || {}]);
  return useSWR<UserInvitesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userInvites(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformUserInvite(
  args: UserInviteQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<UserInviteQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserInvite', args || {}]);
  return useSWR<UserInviteQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userInvite(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFiles(
  args?: FilesQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<FilesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFiles', args || {}]);
  return useSWR<FilesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.files(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFile(
  args: FileQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<FileQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFile', args || {}]);
  return useSWR<FileQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.file(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategoryContentTypes(
  args?: FileCategoryContentTypesQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryContentTypesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentTypes', args || {}]);
  return useSWR<FileCategoryContentTypesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategoryContentTypes(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategoryContentGroup(
  args: FileCategoryContentGroupQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroup', args || {}]);
  return useSWR<FileCategoryContentGroupQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategoryContentGroup(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategoryContentGroups(
  args?: FileCategoryContentGroupsQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupsQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroups', args || {}]);
  return useSWR<FileCategoryContentGroupsQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategoryContentGroups(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategories(
  args?: FileCategoriesQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoriesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategories', args || {}]);
  return useSWR<FileCategoriesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategories(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategory(
  args: FileCategoryQueryVariables,
  roqClient = defaultBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategory', args || {}]);
  return useSWR<FileCategoryQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategory(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
    
