"use client";
import { usePaginatedData } from "@/hooks/usePaginatedData";
import { getContacts } from "@/mocks/contacts";

const CurrentUserBadge = () => (
  <span className="inline-flex px-2 py-[2px] bg-secondary text-body2 text-text rounded-lg">Me</span>
);

export const PaginationExample = () => {
  const {
    data,
    extra,
    hasNextPage,
    isFetchingNextPage,
    loadMore,
  } = usePaginatedData({
    queryFn: async ({ limit, offset }) => {
      const result = await getContacts(limit, offset);
      console.log(result);
      return result;
    },
    limit: 5,
  });

  const currentUserContact = extra?.currentUserContact;

  return (
    <div className="flex flex-col gap-2">
      {extra && (
        <span className="text-body1">Current user: {extra.currentUserContact.firstName} {extra.currentUserContact.lastName}</span>
      )}
      {data.map(contact => {
        const { firstName, lastName, id,phoneNumber  } = contact;
        const isMe = currentUserContact?.id === id;

        return (
          <div key={id} className="flex flex-col">
            <span className="text-body2">{firstName} {lastName} {isMe && <CurrentUserBadge />}</span>
            <span className="text-body2">{phoneNumber}</span>
          </div>
        );
      })}
      {isFetchingNextPage && <span>Загрузка...</span>}
      {hasNextPage && 
        <button disabled={isFetchingNextPage} onClick={loadMore} className="p-2 cursor-pointer">Загрузить еще</button>
      }
    </div>
  );
};
