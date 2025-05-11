import { useCallback, useState } from "react";

const ITERABLE_BASE_URL =
  "https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=";

  const data = new FormData();

  Object.keys(dataObject).map((key) => {
    data.append(key, dataObject[key]);
  });

    method: "POST",
    body: data,
  });

  const response = await fetch(request);

  if (!response.ok) {
  }
}

export function ActionForm({
  children,
  action,
  target = "_blank",
  method = "post",
  ...props
}) {
  return (
    <form action={action} method={method} target={target} {...props}>
      {children}
    </form>
  );
}

export default function useIterableSignUp({ formId, schema, initialValues }) {
  const [state, setState] = useState(initialValues);

  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const actionUrl = `${ITERABLE_BASE_URL}${formId}`;

  const onValueChange = useCallback((event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setIsDirty(!!value);
    setIsSubmitting(false);
    setError(null);
    setIsSuccess(false);
  }, []);

  const onSubmit = useCallback(
    async (e) => {

      setIsDirty(true);
      setIsSubmitting(true);
      setError(null);
      setIsSuccess(false);

      if (!schema.isValidSync(state)) {
        return;
      }

      try {
        setIsLoading(true);
        setIsSuccess(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [state, actionUrl, schema],
  );

  return {
    actionUrl,
    values: state,
    onValueChange,
    onSubmit,
    error,
    isSuccess,
    isLoading,
    isDirty,
    isSubmitting,
  };
}
