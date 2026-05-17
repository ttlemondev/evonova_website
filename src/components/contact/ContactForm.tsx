'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '@/components/ui/Button';

const contactFormSchema = z.object({
  name: z.string().min(1, '请输入您的姓名'),
  email: z.string().min(1, '请输入邮箱').email('请输入有效的邮箱地址'),
  company: z.string().min(1, '请输入公司名称'),
  phone: z.string().optional(),
  message: z.string().min(1, '请输入留言内容'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('提交失败,请稍后重试');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-canvas rounded-[var(--radius-lg)] p-[var(--spacing-xxl)]"
    >
      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-body-sm font-medium text-ink mb-2">
          姓名 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full border border-hairline rounded-[var(--radius-md)] p-[var(--spacing-md)] text-body focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-body-sm font-medium text-ink mb-2">
          邮箱 <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full border border-hairline rounded-[var(--radius-md)] p-[var(--spacing-md)] text-body focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Company Field */}
      <div className="mb-6">
        <label htmlFor="company" className="block text-body-sm font-medium text-ink mb-2">
          公司名称 <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          className="w-full border border-hairline rounded-[var(--radius-md)] p-[var(--spacing-md)] text-body focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-body-sm font-medium text-ink mb-2">
          电话
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full border border-hairline rounded-[var(--radius-md)] p-[var(--spacing-md)] text-body focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-body-sm font-medium text-ink mb-2">
          留言 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full border border-hairline rounded-[var(--radius-md)] p-[var(--spacing-md)] text-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          variant="primary"
          loading={submitStatus === 'loading'}
          disabled={submitStatus === 'loading'}
        >
          {submitStatus === 'loading' ? '提交中...' : '提交咨询'}
        </Button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-[var(--radius-md)] text-green-800 text-body-sm">
            提交成功!我们会尽快与您联系。
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-[var(--radius-md)] text-red-800 text-body-sm">
            {errorMessage}
          </div>
        )}
      </div>
    </form>
  );
}
