import { useFormController } from '../../hooks/useFormController';


const ControlledForm = () => {
  const { formData, onChange } = useFormController();
  return (
    <div
      style={{ marginBottom: "2rem" }}
    >
      <input type="text" name='username' placeholder="username" value={formData.username} onChange={onChange} />
      <input type="text" name='password' placeholder="password" value={formData.password} onChange={onChange} />
    </div>
  )
};
export default ControlledForm;
