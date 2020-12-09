export const submit = async (answers, examPortal, setOpenCompletionModal) => {
  try {
    const response = await examPortal.post('/user/questions', {
      data: answers,
    });

    setOpenCompletionModal(true);
  } catch (error) {}
};
